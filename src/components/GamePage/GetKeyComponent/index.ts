export const getArrowKeyPressed = (event: KeyboardEvent): string | null => {
  const allowedKeys = ['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'];
  return allowedKeys.includes(event.key) ? event.key : null;
};
export const listenForArrowKeys = (callback: (key: string | null) => void) => {
  const handleKeyDown = (event: KeyboardEvent) => {
    const pressedKey = getArrowKeyPressed(event);
    callback(pressedKey);
  };

  window.addEventListener('keydown', handleKeyDown);

  return () => {
    window.removeEventListener('keydown', handleKeyDown);
  };
};
