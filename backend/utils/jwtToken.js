export const sendToken = (user, statusCode, res, message) => {
  const token = user.getJWTToken();
  
  // Set cookie options
  const options = {
    expires: new Date(
      Date.now() + process.env.COOKIE_EXPIRE * 24 * 60 * 60 * 1000
    ),
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production', // true in production
    sameSite: 'lax',
    path: '/',
  };

  console.log('🍪 Setting cookie with options:', options);
  console.log('🔑 Token generated:', token ? 'Yes' : 'No');

  res.status(statusCode).cookie("token", token, options).json({
    success: true,
    user,
    message,
    token,
  });
};