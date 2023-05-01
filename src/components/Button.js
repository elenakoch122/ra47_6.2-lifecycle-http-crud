export default function Button({ icon, color, fontSize, element = null, callback = null }) {
  const styles = { color, fontSize };
  let classes;

  switch (element) {
    case 'note':
      classes = "button button__note";
      break;
    case 'footer':
      classes = "button button__footer";
      break;
    default:
      classes = "button";
  }

  return <button className={classes} style={styles} onClick={callback}>{icon}</button>;
}
