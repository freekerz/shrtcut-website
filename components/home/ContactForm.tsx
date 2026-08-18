"use client";

import emailjs from "@emailjs/browser";
import { AlertCircle, CheckCircle, Send } from "lucide-react";
import { useTranslations } from "next-intl";
import { useState } from "react";

import { EMAILJS_CONFIG } from "@/lib/emailjs";

type Status = "idle" | "sending" | "success" | "error";

const INITIAL = { name: "", email: "", phone: "", project: "", offerType: "" };

const ContactForm = () => {
  const t = useTranslations();
  const [formData, setFormData] = useState(INITIAL);
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone || t("contact.form.notProvided"),
        offer_type: formData.offerType || t("contact.form.notSpecified"),
        message: formData.project,
        subject: `${t("contact.form.subject")} - ${formData.offerType || t("contact.form.generalRequest")}`,
        to_email: EMAILJS_CONFIG.TO_EMAIL,
      };

      await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        templateParams,
      );

      setStatus("success");
      setTimeout(() => {
        setFormData(INITIAL);
        setStatus("idle");
      }, 3000);
    } catch (error) {
      console.error("Error sending email:", error);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const inputClass =
    "w-full rounded-lg border border-gray-700 bg-[#121212] px-4 py-3 text-white placeholder-gray-500 transition-colors focus:border-blue-500 focus:outline-none";

  return (
    <section id="contact" className="scroll-mt-24 bg-[#121212] px-6 py-20">
      <div className="mx-auto max-w-3xl">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-4xl font-bold text-white md:text-5xl">{t("contact.title")}</h2>
          <p className="text-xl text-gray-300">{t("contact.subtitle")}</p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-2xl border border-gray-800 bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] p-8 shadow-2xl md:p-12"
        >
          <div className="mb-6">
            <label htmlFor="name" className="mb-2 block text-sm font-semibold text-gray-300">
              {t("contact.form.name")} <span className="text-red-500">*</span>
            </label>
            <input id="name" name="name" type="text" required value={formData.name} onChange={handleChange} className={inputClass} />
          </div>

          <div className="mb-6">
            <label htmlFor="email" className="mb-2 block text-sm font-semibold text-gray-300">
              {t("contact.form.email")} <span className="text-red-500">*</span>
            </label>
            <input id="email" name="email" type="email" required value={formData.email} onChange={handleChange} className={inputClass} />
          </div>

          <div className="mb-6">
            <label htmlFor="phone" className="mb-2 block text-sm font-semibold text-gray-300">
              {t("contact.form.phone")}
            </label>
            <input id="phone" name="phone" type="tel" value={formData.phone} onChange={handleChange} className={inputClass} />
          </div>

          <div className="mb-6">
            <label htmlFor="offerType" className="mb-2 block text-sm font-semibold text-gray-300">
              {t("contact.form.offerType")}
            </label>
            <select id="offerType" name="offerType" value={formData.offerType} onChange={handleChange} className={inputClass}>
              <option value="">---</option>
              <option value={t("contact.form.offers.dev")}>{t("contact.form.offers.dev")}</option>
              <option value={t("contact.form.offers.mvp")}>{t("contact.form.offers.mvp")}</option>
              <option value={t("contact.form.offers.ia")}>{t("contact.form.offers.ia")}</option>
              <option value={t("contact.form.offers.mission")}>{t("contact.form.offers.mission")}</option>
              <option value={t("contact.form.offers.other")}>{t("contact.form.offers.other")}</option>
            </select>
          </div>

          <div className="mb-8">
            <label htmlFor="project" className="mb-2 block text-sm font-semibold text-gray-300">
              {t("contact.form.project")} <span className="text-red-500">*</span>
            </label>
            <textarea
              id="project"
              name="project"
              required
              rows={6}
              value={formData.project}
              onChange={handleChange}
              placeholder={t("contact.form.projectPlaceholder")}
              className={`${inputClass} resize-none`}
            />
          </div>

          <button
            type="submit"
            disabled={status === "sending" || status === "success"}
            className="flex w-full transform items-center justify-center gap-3 rounded-lg bg-blue-600 px-8 py-4 font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:bg-blue-700 hover:shadow-xl disabled:cursor-not-allowed disabled:bg-gray-600 disabled:hover:scale-100"
          >
            {status === "idle" && (
              <>
                <Send className="h-5 w-5" />
                {t("contact.form.submit")}
              </>
            )}
            {status === "sending" && (
              <>
                <div className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent" />
                {t("contact.form.sending")}
              </>
            )}
            {status === "success" && (
              <>
                <CheckCircle className="h-5 w-5" />
                {t("contact.form.success")}
              </>
            )}
            {status === "error" && (
              <>
                <AlertCircle className="h-5 w-5" />
                {t("contact.form.error")}
              </>
            )}
          </button>

          {status === "success" && (
            <div className="mt-4 rounded-lg border border-green-500/30 bg-green-500/10 p-4 text-center text-sm text-green-400">
              {t("contact.form.success")}
            </div>
          )}
          {status === "error" && (
            <div className="mt-4 rounded-lg border border-red-500/30 bg-red-500/10 p-4 text-center text-sm text-red-400">
              {t("contact.form.error")}
            </div>
          )}
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
