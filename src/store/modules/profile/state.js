
let userProfile;
try {
  const profileJson = localStorage.getItem('LANDING_PROFILE');
  userProfile = profileJson ? JSON.parse(profileJson) : null;
  localStorage.removeItem('LANDING_PROFILE');
} catch (e) {
  userProfile = null;
}

export default {
  userCart: null,
  userProfile,
};
