
let userProfile;
try {
  const profileJson = localStorage.getItem('LANDING_PROFILE');
  userProfile = profileJson ? JSON.parse(profileJson) : null;
} catch (e) {
  userProfile = null;
}

export default {
  userProfile,
};
