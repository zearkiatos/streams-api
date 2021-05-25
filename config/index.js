require('dotenv').config();

const config = {
    DEV: process.env.NODE_ENV !== 'production',
    ENVIRONMENT: process.env.NODE_ENV,
    PORT: process.env.PORT || 5000,
};

module.exports = { config };