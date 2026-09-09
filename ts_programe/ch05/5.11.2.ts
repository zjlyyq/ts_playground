export class RequestBuilder {
  private url: string | null = null;
  private method: 'get' | 'post' | 'put' | 'delete' | null = null;
  private data: object | null = null;

  setUrl(url: string): this {
    this.url = url;
    return this;
  }

  setMethod(method: 'get' | 'post' | 'put' | 'delete'): this {
    this.method = method;
    return this;
  }

  setData(data: object): this {
    this.data = data;
    return this;
  }

  send(): void {
    console.log('send request');
  }
}

const request = new RequestBuilder()
  .setUrl('/queryOrderInfo')
  .setMethod('get')
  .setData({ userId: 1, orderId: 100100 });
console.log(request);
