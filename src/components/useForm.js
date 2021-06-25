
export const useForm = (options) => {
  // form logic
  const [data, setData] = useState(options?.initialValues || {});

  const handleChange = (key, sanitizeFn) => (e) => {
    const value = sanitizeFn ? sanitizeFn(e.target.value) : e.target.value;
    setData({
      ...data,
      [key]: value,
    })
  }
}