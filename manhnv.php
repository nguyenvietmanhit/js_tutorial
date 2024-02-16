<?php
$onLoad = 11;
if ($onLoad != "")	$onLoad = " onLoad=$onLoad";
echo "<body" . $onLoad . ">\n";

$btn = 123;
$new_kbn = 456;
echo"                                <input type='image'" . $btn ." border='0' onClick=\"editCclSche('" . $new_kbn . "'); return false;\">\n";
?>
<script>
    function editCclSche(a) {
        console.log(a)
    }
</script>
