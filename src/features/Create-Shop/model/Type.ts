import { FieldValues, UseFormGetValues } from 'react-hook-form';
import { Dispatch, SetStateAction } from 'react';

export interface Item {
  id: string;
  email: string;
  type: string;
}
export interface User {
  item: Item;
  href: string;
}

export interface ShopItem {
  id: string;
  name: string;
  category: string;
  address1: string;
  address2: string;
  description: string;
  imageUrl: string;
  originalHourlyPay: string;
  user: User;
}

export interface Link {
  rel: string;
  description: string;
  method: string;
  href: string;
  body?: any;
  query?: any;
}

export interface ShopData {
  item: ShopItem;
  links: Link[];
}

export interface EmptyProps {
  name: string;
  category: string;
  address1: string;
  address2: string;
  originalHourlyPay: string;
  imageUrl: string;
  description: string;
}

export interface CreateShopProps {
  initialValues: ShopItem | EmptyProps;
  shopId: string;
}

export interface UseCreateShopRequestProps {
  shopId: string;
  uploadedImageUrl: string | undefined;
  getValues: UseFormGetValues<FieldValues>;
}

export interface GeneratePresignedUrlType {
  imageName: string;
  setPresignedUrl: Dispatch<SetStateAction<string>>;
}

export interface UploadImageToS3Type {
  fileName: File | null;
  presignedUrl: string;
  setUploadedImageUrl: Dispatch<SetStateAction<string | undefined>>;
}
