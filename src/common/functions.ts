export const goToSection = (name: string): void => {
  const section = document.getElementById(name) as HTMLElement;
  window.scrollTo({
    top: section.offsetTop,
    behavior: "smooth",
  });
};
