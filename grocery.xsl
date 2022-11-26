<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"
   xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
   <xsl:template match="/">
      <html>
         <body>
            <div style="display: flex; flex-direction:column; align-items: center;">
               <h2>ITEMS</h2>
               <table border="1">
                  <tr bgcolor="#9acd32">
                     <th>Name</th>
                     <th>Quantity</th>
                     <th>Price</th>
                     <th>Description</th>
                     <th>Calories</th>
                  </tr>


                  <xsl:for-each select="grocery/item">
                     <tr>
                        <td>
                           <xsl:value-of select="name" />
                        </td>
                        <td>
                           <xsl:value-of select="quantity" />
                        </td>
                        <td>
                           <xsl:value-of select="price" />
                        </td>
                        <td>
                           <xsl:value-of select="description" />
                        </td>
                        <td>
                           <xsl:value-of select="calories" />
                        </td>
                     </tr>
                  </xsl:for-each>

               </table>
            </div>
         </body>
      </html>
   </xsl:template>
</xsl:stylesheet>