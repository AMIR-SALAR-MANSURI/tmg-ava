function timeAgo(date: string | undefined) {
  if (!date) return;

  const now = new Date() as any;
  const past = new Date(date) as any;
  const seconds = Math.floor((now - past) / 1000);

  const intervals = {
    سال: 31536000, // 365 * 24 * 60 * 60
    ماه: 2592000, // 30 * 24 * 60 * 60
    هفته: 604800, // 7 * 24 * 60 * 60
    روز: 86400, // 24 * 60 * 60
    ساعت: 3600, // 60 * 60
    دقیقه: 60,
    ثانیه: 1,
  };

  for (const [unit, value] of Object.entries(intervals)) {
    const count = Math.floor(seconds / value);
    if (count >= 1) {
      return `${count} ${unit} پیش`;
    }
  }

  return "just now";
}

export { timeAgo };
