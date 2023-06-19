<!-- bt1 -->
<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $time = $_POST["time"];
    $details = $_POST["details"];
    $gender = $_POST["gender"];

    $errors = array();

    if (empty($name)) {
        $errors[] = "Name không được để trống";
    }

    if (empty($email)) {
        $errors[] = "Email không được để trống";
    } elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $errors[] = "Email không đúng định dạng";
    }

    if (empty($time)) {
        $errors[] = "Specific Time không được để trống";
    }

    if (empty($details)) {
        $errors[] = "Class details không được để trống";
    }

    if (count($errors) > 0) {
        echo "<ul>";
        foreach ($errors as $error) {
            echo "<li>$error</li>";
        }
        echo "</ul>";
    } else {
        echo "Your Given details are as:<br>";
        echo "Name: $name<br>";
        echo "Email: $email<br>";
        echo "Specific Time: $time<br>";
        echo "Class details: $details<br>";
        echo "Gender: $gender<br>";
    }
}
?>

<form method="post">
  Name: <input type="text" name="name"><br>
  Email: <input type="text" name="email"><br>
  Specific Time: <input type="text" name="time"><br>
  Class details: <input type="text" name="details"><br>
  Gender:
  <input type="radio" name="gender" value="male"> Male
  <input type="radio" name="gender" value="female"> Female<br>
  <input type="submit">
</form>
<!-- bt2 -->
<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST["username"];
    $password = $_POST["password"];
    $user_type = $_POST["user_type"];
    $display_name = $_POST["display_name"];
    $address = $_POST["address"];
    $email = $_POST["email"];
    $gender = $_POST["gender"];

    $errors = [];

    if (empty($username)) {
        $errors[] = "Username không được để trống";
    }

    if (empty($password)) {
        $errors[] = "Password không được để trống";
    }

    if (empty($user_type)) {
        $errors[] = "User type không được để trống";
    }

    if (empty($display_name)) {
        $errors[] = "Display name không được để trống";
    } elseif (strlen($display_name) > 24) {
        $errors[] = "Display name không được vượt quá 24 ký tự";
    }

    if (empty($address)) {
        $errors[] = "Address không được để trống";
    }

    if (empty($email)) {
        $errors[] = "Email không được để trống";
    } elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $errors[] = "Email không đúng định dạng";
    }

    if (empty($gender)) {
        $errors[] = "Gender không được để trống";
    }

    if (count($errors) == 0) {
        echo "Username: " . htmlspecialchars($username) . "<br>";
        echo "Password: " . htmlspecialchars($password) . "<br>";
        echo "User type: " . htmlspecialchars($user_type) . "<br>";
        echo "Display name: " . htmlspecialchars($display_name) . "<br>";
        echo "Address: " . htmlspecialchars($address) . "<br>";
        echo "Email: " . htmlspecialchars($email) . "<br>";
        echo "Gender: " . htmlspecialchars($gender) . "<br>";
    } else {
        foreach ($errors as $error) {
            echo $error . "<br>";
        }
    }
}
?>

<form method="post">
  <label for="username">Username:</label><br>
  <input type="text" id="username" name="username"><br>
  <label for="password">Password:</label><br>
  <input type="password" id="password" name="password"><br>
  <label for="user_type">User type:</label><br>
  <select id="user_type" name="user_type">
      <option value="">--Chọn--</option>
      <option value="admin">Admin</option>
      <option value="member">Member</option>
  </select><br>
  <label for="display_name">Display name:</label><br>
  <input type="text" id="display_name" name="display_name"><br>
  <label for="address">Address:</label><br>
  <input type="text" id="address" name="address"><br>
  <label for="email">Email:</label><br>
  <input type="text" id="email" name="email"><br>
  <label for="gender">Gender:</label><br>
  <input type="radio" id="male" name="gender" value="male">
  <label for="male">Male</label><br>
  <input type="radio" id="female" name="gender" value="female">
  <label for="female">Female</label><br><br>
  <input type="submit" value="Submit">
</form>
<!-- bt3 -->
<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST["username"];
    $password = $_POST["password"];
    $email = $_POST["email"];
    $academy = $_POST["academy"];
    $token = $_POST["token"];
    $concentration = $_POST["concentration"];
    $message = $_POST["message"];

    $errors = array();

    if (empty($username)) {
        $errors[] = "Username không được để trống";
    }

    if (empty($password)) {
        $errors[] = "Password không được để trống";
    } elseif (strlen($password) < 8) {
        $errors[] = "Password phải có độ dài tối thiểu 8 ký tự";
    }

    if (empty($errors)) {
        echo "Đăng ký thành công!<br>";
        echo "Thông tin của bạn:<br>";
        echo "Email: " . htmlspecialchars($email) . "<br>";
        echo "Select academy: " . htmlspecialchars($academy) . "<br>";
        echo "Token: " . htmlspecialchars($token) . "<br>";
        echo "Concentration: " . htmlspecialchars($concentration) . "<br>";
        echo "Message: " . htmlspecialchars($message) . "<br>";
    } else {
        foreach ($errors as $error) {
            echo "<span style='color:red'>" . htmlspecialchars($error) . "</span><br>";
        }
    }
}
?>

<form method="post">
    <label for="username">Username:</label>
    <input type="text" name="username" id="username"><br>
    <label for="password">Password:</label>
    <input type="password" name="password" id="password"><br>
    <label for="email">Email:</label>
    <input type="email" name="email" id="email"><br>
    <label for="academy">Select academy:</label>
    <select name="academy" id="academy">
        <option value="">--Please choose an option--</option>
        <option value="1">Academy 1</option>
        <option value="2">Academy 2</option>
        <option value="3">Academy 3</option>
    </select><br>
    <label for="token">Token:</label>
    <input type="text" name="token" id="token"><br>
    <label for="concentration">Concentration:</label>
    <input type="text" name="concentration" id="concentration"><br>
    <label for="message">Message:</label><br>
    <textarea name="message" id="message"></textarea><br>
    <input type="submit" value="Submit">
</form>
<!-- bt5 -->
<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $lastname = $_POST["lastname"];
    $password = $_POST["password"];
    $confirm_password = $_POST["confirm_password"];

    if (empty($lastname)) {
        $lastname_error = "Lastname is required";
    }
    if (empty($password)) {
        $password_error = "Password is required";
    }
    if (empty($confirm_password)) {
        $confirm_password_error = "Confirm Password is required";
    }
}
?>
<form method="post">
    <label for="lastname">Lastname:</label>
    <input type="text" name="lastname" id="lastname">
    <?php if (!empty($lastname_error)): ?>
        <span style="color:red"><?php echo $lastname_error; ?></span>
    <?php endif; ?>

    <label for="password">Password:</label>
    <input type="password" name="password" id="password">
    <?php if (!empty($password_error)): ?>
        <span style="color:red"><?php echo $password_error; ?></span>
    <?php endif; ?>

    <label for="confirm_password">Confirm Password:</label>
    <input type="password" name="confirm_password" id="confirm_password">
    <?php if (!empty($confirm_password_error)): ?>
        <span style="color:red"><?php echo $confirm_password_error; ?></span>
    <?php endif; ?>

    <input type="submit" value="Save">
</form>
<!-- bt6 -->
<?php
if (isset($_POST['submit'])) {
    $a = $_POST['a'];
    $b = $_POST['b'];
    $error = "";
    if (empty($a) || empty($b)) {
        $error = "Không được để trống số a hoặc số b";
    } elseif (!is_numeric($a) || !is_numeric($b)) {
        $error = "Chỉ cho phép nhập số";
    } else {
        switch ($_POST['submit']) {
            case 'Cộng':
                $result = $a + $b;
                break;
            case 'Trừ':
                $result = $a - $b;
                break;
            case 'Nhân':
                $result = $a * $b;
                break;
            case 'Chia':
                $result = $a / $b;
                break;
        }
    }
}
?>
<!-- bt7 -->
<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $phone = $_POST["phone"];
    $website = $_POST["website"];
    $message = $_POST["message"];

    if (empty($name) || empty($email) || empty($phone) || empty($website) || empty($message)) {
        echo "<p style='color:red'>Không được để trống các trường</p>";
    } else {
        if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
            echo "<p style='color:red'>Email không hợp lệ</p>";
        } elseif (!preg_match("/^[0-9]*$/", $phone)) {
            echo "<p style='color:red'>Số điện thoại chỉ cho phép nhập số</p>";
        } elseif (!filter_var($website, FILTER_VALIDATE_URL)) {
            echo "<p style='color:red'>Trường website cần phải có định dạng URL</p>";
        } else {
            echo "Send contact thành công! <br>";
            echo "Your name: " . $name . "<br>";
            echo "Your email: " . $email . "<br>";
            echo "Your phone number: " . $phone . "<br>";
            echo "Your Website: " . $website . "<br>";
            echo "Your message: " . $message;
        }
    }
}
?>


