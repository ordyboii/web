interface Props {
  children?: JSX.Element | string;
}

export default function SectionTag({ children }: Props) {
  return (
    <div>
      <p className='section-tag'>{children}</p>
    </div>
  );
}
