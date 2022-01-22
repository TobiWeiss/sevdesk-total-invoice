const ModalService = {
  isOpen: false,
  on(event, callback) {
    document.addEventListener(event, e => callback(e.detail));
  },
  open(component, props = {}) {
    document.dispatchEvent(
      new CustomEvent('open', { detail: { component, props } }),
    );
    this.isOpen = true;
  },
  close() {
    document.dispatchEvent(new CustomEvent('close'));
    this.isOpen = false;
  },
};

export default ModalService;
