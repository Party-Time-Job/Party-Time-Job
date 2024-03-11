function formatHourlyPay(hourlyPay: number): string {
  const formatted = new Intl.NumberFormat('ko-KR', {
    style: 'currency',
    currency: 'KRW',
  }).format(hourlyPay);
  const formattedHourlyPay = formatted.replace('₩', '');
  return formattedHourlyPay;
}
export default formatHourlyPay;
