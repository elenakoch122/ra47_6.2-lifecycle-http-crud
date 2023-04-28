import Button from "./Button";

export default function Note() {
  return (
    <div className="note">
      <p className="note__text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid itaque quidem repudiandae ex possimus deleniti sint rem tenetur in? Reprehenderit itaque id ratione. Blanditiis dolorum officiis vero ab neque optio?
      </p>
      <Button icon="&#10006;" color="red" fontSize="1.2rem" element="note" />
    </div>
  );
}
