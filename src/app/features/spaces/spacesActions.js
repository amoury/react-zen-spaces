export const FETCH_SPACES = "FETCH_SPACES";
export const CREATE_SPACE = "CREATE_SPACE";
export const UPDATE_SPACE = "UPDATE_SPACE";
export const DELETE_SPACE = "DELETE_SPACE";

export const fetchSpaces = spaces => ({
  type: FETCH_SPACES,
  payload: spaces
});

export const createSpace = space => ({
  type: CREATE_SPACE,
  payload: space
});

export const updateSpace = space => ({
  type: UPDATE_SPACE,
  payload: { space }
});

export const deleteSpace = spaceId => ({
  type: DELETE_SPACE,
  payload: spaceId
})
