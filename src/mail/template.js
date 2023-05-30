/* eslint-disable object-curly-spacing */
/* eslint-disable space-before-function-paren */
/* eslint-disable indent */

function returnTemplate(template, data) {
  const templates = {}
  templates.activation = `<table align="center" border="0" cellpadding="0" cellspacing="0" width="600">
        <tr>
          <td align="center">
            <img src="https://netsys.ml/favicon.ico" alt="Logo" width="150" height="150">
          </td>
        </tr>
        <tr>
          <td align="center" style="font-family: Arial, sans-serif; font-size: 18px; padding: 20px;">
            <h1>Welcome to Netsys! ${data.name}</h1>
            <p>Thank you for creating an account. To activate your account, please click the button below:</p>
            <a href="https://netsys.ml/api/auth/activate?code=${data.code}"
              style="display: inline-block; padding: 10px 20px; background-color: #007bff; color: #fff; text-decoration: none; font-weight: bold; border-radius: 5px;">Activate
              Account</a>
          </td>
        </tr>
        <tr>
          <td align="center" style="font-family: Arial, sans-serif; font-size: 14px; padding: 20px;">
            <p>If you did not create an account, please ignore this email.</p>
          </td>
        </tr>
        <tr>
          <td align="center" style="font-family: Arial, sans-serif; font-size: 12px; color: #999;">
            &copy; 2023 Netsys. All rights reserved.
          </td>
        </tr>
      </table>`

  templates.test = `  <div style="font-family: Arial, sans-serif; background-color: #f2f2f2;">
<div style="max-width: 600px; margin: 0 auto; padding: 20px; background-color: #ffffff; border-radius: 5px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);">
  <h1 style="color: #333333;">Hello ${data.name}!</h1>
  <p style="color: #666666;">This is an email test.</p>
  <p style="color: #666666;">You can customize the content and styles as per your needs.</p>
  <p style="color: #666666;">it was sent to check communications</p>
  <p>
    <a style="display: inline-block; padding: 10px 20px; background-color: #337ab7; color: #ffffff; text-decoration: none; border-radius: 3px;" href="https://netsys.ml">Netsys Web Site !!</a>
  </p>
</div>
</div>`

  if (template === 'activation') {
    return templates.activation
  } else {
    return templates.test
  }
}
export default returnTemplate
