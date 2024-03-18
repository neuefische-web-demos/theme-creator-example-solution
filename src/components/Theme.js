import "./Theme.css";
import ColorList from "./ColorList";
import ThemePreview from "./ThemePreview";
import { useState } from "react";
import { IconChevronDown, IconChevronUp } from "@tabler/icons-react";
import Button from "./Button";
import ThemeForm from "./ThemeForm";

const DISPLAY_STATES = {
  preview: "PREVIEW",
  detail: "DETAIL",
  edit: "EDIT",
};

export default function Theme({ theme, onDelete, onEdit }) {
  const [displayState, setDisplayState] = useState(DISPLAY_STATES.preview);

  return (
    <section className="theme">
      <button
        className="theme__toggle-details-button"
        onClick={() =>
          setDisplayState(
            displayState === DISPLAY_STATES.preview
              ? DISPLAY_STATES.detail
              : DISPLAY_STATES.preview
          )
        }
      >
        <h2 className="theme__title">{theme.name}</h2>
        {displayState === DISPLAY_STATES.preview ? (
          <IconChevronUp size="3rem" />
        ) : (
          <IconChevronDown size="3rem" />
        )}
      </button>

      {displayState === DISPLAY_STATES.preview && (
        <ThemePreview colors={theme.colors} />
      )}

      {displayState === DISPLAY_STATES.detail && (
        <>
          <div className="theme__button-group">
            <Button
              variant="outlined"
              onClick={() => setDisplayState(DISPLAY_STATES.edit)}
            >
              Edit
            </Button>
            <Button variant="danger" onClick={onDelete}>
              Delete
            </Button>
          </div>
          <ColorList colors={theme.colors} />
        </>
      )}

      {displayState === DISPLAY_STATES.edit && (
        <ThemeForm
          onSubmit={(updatedTheme) => {
            onEdit(updatedTheme);
            setDisplayState(DISPLAY_STATES.detail);
          }}
          initialData={theme}
          isEditMode
        />
      )}
    </section>
  );
}
