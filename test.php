<?php
        $merchant_login = "PrideBot";
        $password_1 = "L4pQzXbL2o0M1G5rGRXA";
        $invid = 123;
        $description = "Техническая документация по ROBOKASSA";
        $out_sum = "500";
        $signature_value = md5("$merchant_login:$out_sum:$invid:$password_1");
        print "<html><script language=JavaScript ".
            "src='https://auth.robokassa.ru/Merchant/PaymentForm/FormMS.js?".
            "MerchantLogin=$merchant_login&OutSum=$out_sum&InvoiceID=$invid".
            "&Description=$description&SignatureValue=$signature_value'></script></html>";
?>


