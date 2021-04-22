import { useState } from 'react';

export const useThxMessage = () => {
  const [openThxMessage, setOpenThxMessage] = useState(false);
  return { openThxMessage, setOpenThxMessage };
};
