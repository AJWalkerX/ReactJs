export interface IBaseResponse<T> {
  data: T;
  code: number;
  message: string;
  success: boolean;
}
