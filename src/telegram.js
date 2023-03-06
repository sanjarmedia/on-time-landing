export function telegram(data) {
  const token = '5792515929:AAFvxY38Yvqu1NNBzKHY5-cX2XsqEHtDm_Q'
  const chat_id = -1001824834487
  const url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=${data}`

  return fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
  })
    .then(r => r)
    .catch(e => e)
}
