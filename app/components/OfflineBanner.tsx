"use client";

export default function OfflineBanner({ enabled = false }: { enabled?: boolean }) {
  if (!enabled) return null;
  return (
    <div className="fixed bottom-4 left-4 right-4 z-50 mx-auto max-w-3xl rounded bg-yellow-50 p-3 text-sm text-yellow-900 shadow">
      Low connectivity mode enabled. Text responses only. Disable images for faster loading.
    </div>
  );
}
