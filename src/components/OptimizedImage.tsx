import Image, { type ImageProps } from "next/image";

const blurSvg = `<svg width="400" height="300" xmlns="http://www.w3.org/2000/svg"><rect width="100%" height="100%" fill="%23f3f1ec"/></svg>`;
const blurDataUrl = `data:image/svg+xml;base64,${typeof Buffer !== "undefined" ? Buffer.from(blurSvg).toString("base64") : btoa(blurSvg)}`;

type OptimizedImageProps = Omit<ImageProps, "placeholder" | "blurDataURL"> & {
  skipBlur?: boolean;
};

export default function OptimizedImage({ skipBlur = false, alt, ...props }: OptimizedImageProps) {
  return (
    <Image
      alt={alt ?? ""}
      {...props}
      {...(!skipBlur && props.priority ? {} : { placeholder: "blur", blurDataURL: blurDataUrl })}
    />
  );
}
