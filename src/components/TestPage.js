import "./TestPage.css";

export default function TestPage({ theme, onClose }) {
  const colors = theme.colors.reduce(
    (acc, color) => ({
      ...acc,
      [color.role]: color.value,
    }),
    {}
  );

  return (
    <section
      className="test-page"
      style={{
        "--primary": colors.primary,
        "--secondary": colors.secondary,
        "--surface": colors.surface,
        "--surface-on": colors["surface-on"],
      }}
    >
      <button
        className="test-page__button test-page__button--secondary"
        onClick={onClose}
      >
        close
      </button>
      <h1 className="test-page__title">{theme.name}</h1>
      <p className="test-page__paragraph">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus eveniet
        possimus beatae. Accusamus dicta quod ipsam quas ea ab dolorem in
        aspernatur, veritatis debitis voluptas dolor soluta ullam nulla aliquam!
      </p>
      <p className="test-page__paragraph test-page__paragraph--highlight">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus
        modi exercitationem aut deleniti ut iusto deserunt animi. Asperiores
        voluptatem enim voluptas labore neque non sunt fugit, assumenda,
        voluptates voluptatibus repudiandae?
      </p>
      <div className="test-page__button-group">
        <button className="test-page__button">primary</button>
        <button className="test-page__button test-page__button--secondary">
          secondary
        </button>
        <button className="test-page__button test-page__button--outlined">
          outlined
        </button>
      </div>
    </section>
  );
}
