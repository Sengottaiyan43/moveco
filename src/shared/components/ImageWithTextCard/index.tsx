interface ImageWithTextCardProps {
  imgUrl: string;
  altText: string;
  heading: string;
  content: string;
}

const ImageWithTextCard = (props: ImageWithTextCardProps) => {
  const { imgUrl, altText, heading, content } = props;
  return (
    <div>
      <img src={imgUrl} alt={altText} className="rounded-t-2xl" />
      <div className="bg-primary text-white p-12 rounded-b-2xl">
        <h1 className="text-2xl lg:text-3xl">{heading}</h1>
        <p className="text-lg lg:text-2xl mt-4">{content}</p>
      </div>
    </div>
  );
};

export { ImageWithTextCard };
