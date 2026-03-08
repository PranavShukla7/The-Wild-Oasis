// Pagination
export const PAGE_SIZE = 10;

// Date formats
export const DATE_FORMAT = "MMM dd yyyy";
export const DATE_TIME_FORMAT = "MMM dd yyyy, HH:mm";
export const SHORT_DATE_FORMAT = "MM/dd/yy";

// Query stale time (in milliseconds)
export const QUERY_STALE_TIME = 5 * 60 * 1000; // 5 minutes

// Booking status
export const BOOKING_STATUS = {
  UNCONFIRMED: "unconfirmed",
  CHECKED_IN: "checked-in",
  CHECKED_OUT: "checked-out",
};

// Toast notification durations (in milliseconds)
export const TOAST_DURATION = {
  SUCCESS: 3000,
  ERROR: 5000,
  INFO: 4000,
};

// Cache keys for React Query
export const CACHE_KEYS = {
  BOOKINGS: "bookings",
  CABINS: "cabins",
  SETTINGS: "settings",
  USER: "user",
};

// Application limits
export const LIMITS = {
  MAX_CABIN_CAPACITY: 10,
  MIN_BOOKING_LENGTH: 1,
  MAX_BOOKING_LENGTH: 90,
  MAX_FILE_SIZE: 5 * 1024 * 1024, // 5MB
};
