export default class Functions {

  static currency({
    value,
    currency = 'BRL',
    locale = 'pt-BR',
  }: Readonly<{
    value: number;
    currency: string;
    locale: string;
  }>): string {
    return (value ?? 0).toLocaleString(locale, {
      style: 'currency',
      currency,
    });
  }

}