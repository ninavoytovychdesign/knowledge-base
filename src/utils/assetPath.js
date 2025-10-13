// Utility function to get the correct base path for assets
export const getAssetPath = (path) => {
  // Remove leading slash if present
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  
  // Always use root path for GitHub Pages
  return `/${cleanPath}`;
};
