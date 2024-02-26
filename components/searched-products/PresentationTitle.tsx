interface Props {
  title: string;
}

const PresentationTitle = ({ title }: Props) => (
  <div className="border-b border-orange p-2 m-2">
    <h3 className="text-lg font-bold text-orange">{title}</h3>
  </div>
);

export default PresentationTitle;