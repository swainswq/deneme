<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Log Arama</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
        }
        .container {
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
            background-color: #fff;
            border-radius: 5px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
        h1 {
            text-align: center;
        }
        input[type="text"], input[type="number"], button {
            display: block;
            width: 100%;
            margin-bottom: 10px;
            padding: 10px;
            border: 1px solid #ccc;
            border-radius: 5px;
        }
        button {
            background-color: #007bff;
            color: #fff;
            cursor: pointer;
        }
        button:hover {
            background-color: #0056b3;
        }
        #output {
            margin-top: 20px;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Log Arama</h1>
        <form method="post">
            <input type="text" name="siteUrl" placeholder="Site URL">
            <input type="number" name="logCount" min="1" max="30" placeholder="Kaç log gösterilsin?">
            <button type="submit">Ara</button>
        </form>
        <div id="output">
            <?php
            if ($_SERVER["REQUEST_METHOD"] == "POST") {
                $siteUrl = $_POST["siteUrl"];
                $logCount = $_POST["logCount"];
                if (!empty($siteUrl) && !empty($logCount)) {
                    $logs = file("log.txt");
                    foreach ($logs as $log) {
                        if (strpos($log, $siteUrl) !== false) {
                            echo $log . "<br>";
                            $logCount--;
                            if ($logCount == 0) {
                                break;
                            }
                        }
                    }
                } else {
                    echo "Lütfen site URL ve log sayısı girin.";
                }
            }
            ?>
        </div>
    </div>
</body>
</html>
