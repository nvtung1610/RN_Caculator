export const caculator = input => {
  const replacedInput = input.replace(/x/g, '*').replace(/÷/g, '/');
  try {
    const result = eval(replacedInput);
    return String(result);
  } catch (error) {
    return 'Error';
  }
};

export const formatNumber = str => {
  if (!str || str.trim() === '') {
    return '';
  }

  const num = parseFloat(str);
  if (isNaN(num)) {
    // Check if num is NaN
    return 'Lỗi định dạng, vui lòng nhập lại';
  }
  const decimalCount = (str.split('.')[1] || '').length;

  if (decimalCount < 10) {
    return num.toFixed(decimalCount);
  } else if (decimalCount > 10) {
    return num.toFixed(10);
  } else {
    return num.toString();
  }
};
