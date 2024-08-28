"use client";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import React from "react";

export default function HomePage() {
  const router = useRouter();
  const t = useTranslations("HomePage");
  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    router.push(`/${e.target.value}`);
  };
  return (
    <>
      <select name="" id="" onChange={handleSelect}>
        <option value="/en">Ngôn ngữ mặc định</option>
        <option value="/vi">Tiếng Việt</option>
        <option value="/en">English</option>
      </select>
      <h1>{t("title")}</h1>
      <b>{t("description")}</b>
    </>
  );
}
