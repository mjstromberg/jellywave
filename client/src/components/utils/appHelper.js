const toggleFloatingActionButtonClass = (interactionType, interactionTypes) => (
  interactionType === interactionTypes.SELECTING_ROUTE ? 'floating-action-button-show' : 'floating-action-button-hide'
);

const toggleInteractionTypeFromMenuClick = (currentInteractionType, dispatcher, interactionTypes) => {
  if (currentInteractionType === interactionTypes.VIEWING_MAP) {
    dispatcher(interactionTypes.VIEWING_SIDEBAR);
  }

  if (currentInteractionType === interactionTypes.VIEWING_SIDEBAR) {
    dispatcher(interactionTypes.VIEWING_MAP);
  }
};

const getCurrentLocation = (dispatcher, dispatchFunction) => {
  dispatcher(dispatchFunction);
};

export default {
  toggleFloatingActionButtonClass,
  toggleInteractionTypeFromMenuClick,
  getCurrentLocation,
};
