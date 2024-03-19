/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // 임시로 추가해 놓은 것 입니다. 이미지 업로드 기능 완성되면 바꿔야 함.
    domains: [
      'bootcamp-project-api.s3.ap-northeast-2.amazonaws.com',
      'mblogthumb-phinf.pstatic.net',
      'rimage.gnst.jp',
      'static.wtable.co.kr',
      'news.nateimg.co.kr',
      'cdn.imweb.me',
    ],
  },
};

export default nextConfig;
