export function setItemLocalStorage(key, value) {
  try {
    window.localStorage.setItem(key, JSON.stringify(value));
  } catch (err) {
    console.error(err);
  }
}

export function getItemLocalStorage(key) {
  try {
    const item = window.localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
  } catch (err) {
    console.error(err);
  }
}

export function setItemSessionStorage(key, value) {
  try {
    window.sessionStorage.setItem(key, JSON.stringify(value));
  } catch (err) {
    console.error(err);
  }
}

export function getItemSessionStorage(key) {
  try {
    const item = window.sessionStorage.getItem(key);
    return item ? JSON.parse(item) : null;
  } catch (err) {
    console.error(err);
  }
}

export function removeItemLocalStorage(key) {
  try {
    window.localStorage.removeItem(key);
  } catch (err) {
    console.error(err);
  }
}

export function removeItemSessionStorage(key) {
  try {
    window.sessionStorage.removeItem(key);
  } catch (err) {
    console.error(err);
  }
}
