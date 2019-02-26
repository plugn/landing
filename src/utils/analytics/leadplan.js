
export function notifyEmailAvailableLeadplan(user = null) {
  if (user === null) {
    // eslint-disable-next-line no-param-reassign, prefer-destructuring
    user = window.user;
  }

  let emailavailable = +localStorage.getItem('emailAvailable');
  if (!emailavailable) {
    if (user && user.email && user.email !== '') {
      emailavailable = 1;
      localStorage.setItem('emailAvailable', '1');
    } else {
      emailavailable = 0;
    }
  }

  try {
    let parameterIdx = -1;
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < window.dataLayer.length; i++) {
      // eslint-disable-next-line no-prototype-builtins
      if (window.dataLayer[i].hasOwnProperty('emailavailable')) {
        parameterIdx = i;
      }
    }
    if (parameterIdx !== -1) {
      window.dataLayer[parameterIdx] = { emailavailable };
    } else {
      window.dataLayer.push({ emailavailable });
    }
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error(err);
  }
}

export function leadplanInit() {
  notifyEmailAvailableLeadplan();
}
