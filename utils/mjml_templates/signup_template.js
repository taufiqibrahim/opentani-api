const SignUpTemplate = emailData =>
  `
<mjml>

  <mj-head>
    <mj-title>SignUp</mj-title>
    <mj-font name="Roboto" href="https://fonts.googleapis.com/css?family=Roboto:300,500" />

    <mj-attributes>
      <mj-all font-family="Roboto, Helvetica, sans-serif" />
      <mj-text font-weight="300" font-size="16" color="#616161" line-height="24px" />
      <mj-section padding="0" />
    </mj-attributes>
  </mj-head>

  <mj-body>
    <mj-container>

      <mj-section>
        <mj-column width="100%">
          <mj-image href="https://recast.ai?ref=newsletter" src="https://cdn.recast.ai/newsletter/city-01.png" />
        </mj-column>
      </mj-section>
      
      <mj-section padding-top="32px">
      
      <mj-section>
        <mj-column width="100%">
          <mj-text align="center" font-weight="500" padding="0" font-size="32px" color="#2daa74">
            Selamat datang di Opentani!
          </mj-text>
        </mj-column>
      </mj-section>

      <mj-section padding-top="30px">
        <mj-column width="100%">
          <mj-text>
            <p>Terima kasih sudah mendaftar di Opentani!</p>
            <p>
              Ini adalah email yang berisikan Kode Aktivasi untuk mengaktifkan akun Opentani Anda.
            </p>

          </mj-text>
          
          <mj-text align="center" font-size="40" color="#FF3D00" font-family="Ubuntu, Helvetica, Arial, sans-serif" padding-left="25" padding-right="25" padding-bottom="10" padding-top="10">
            ${emailData.otp}
          </mj-text>
          
          <mj-text>
            <p>Silakan memasukkan kode tersebut ke dalam aplikasi Opentani.</p>
          </mj-text>
        </mj-column>
      </mj-section>
      <mj-section>

        <mj-column width="11%">
          <mj-image padding-right="0" padding-left="25px" align="left" width="70px" href="https://twitter.com/MrJustaine" src="https://cdn.recast.ai/newsletter/justine.png" />
        </mj-column>
        <mj-column width="89%">
          <mj-text padding="0 25px">
            <p style="color:#BDBDBD; line-height: 9px">
              <a href="https://recast.ai?ref=newsletter" style="color: #3498DB;">
              Opentani.ID
            </a>
            </p>
            <p style="font-style: italic; color:#BDBDBD; line-height: 9px">
              Bikin pertanian keren lagi
            </p>
          </mj-text>
        </mj-column>
      </mj-section>
      <mj-section>
        <mj-column width="100%">
          <mj-divider border-width="1px" border-color="#E0E0E0" />
        </mj-column>
      </mj-section>

      <mj-section>
        <mj-column width="65%">
          <mj-image align="left" width="150px" href="https://recast.ai?ref=newsletter" src="https://cdn.recast.ai/newsletter/recast-ai-01.png" />
        </mj-column>
        <mj-column width="35%">
          <mj-table>
            <tr style="list-style: none;">
              <td>
                <a href="https://twitter.com/RecastAI">
                  <img width="25px" src="https://cdn.recast.ai/newsletter/twitter.png" />
                </a>
              </td>
              <td>
                <a href="https://www.facebook.com/recastAI">
                  <img width="25px" src="https://cdn.recast.ai/newsletter/facebook.png" />
                </a>
              </td>
              <td>
                <a href="https://medium.com/@RecastAI">
                  <img width="25px" src="https://cdn.recast.ai/newsletter/medium.png" />
                </a>
              </td>
              <td>
                <a href="https://www.youtube.com/channel/UCA0UZlR8crpgwFiVaSTbVWw">
                  <img width="25px" src="https://cdn.recast.ai/newsletter/youtube.png" />
                </a>
              </td>
              <td>
                <a href="https://plus.google.com/u/0/+RecastAi">
                  <img width="25px" src="https://cdn.recast.ai/newsletter/google%2B.png" />
                </a>
              </td>
            </tr>
          </mj-table>
        </mj-column>
      </mj-section>

    </mj-container>
  </mj-body>
</mjml>
`;

export { SignUpTemplate };
