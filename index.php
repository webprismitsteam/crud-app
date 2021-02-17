<!DOCTYPE html>
<html>
<head>
  <title>CRUD App</title>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css">
</head>
<body>
  <div class="container">
    <h1>CRUD App</h1>
    
    <table class="table table-bordered">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Name</th>
          <th scope="col">Email</th>
        </tr>
      </thead>
      <tbody>
        <?php
        require_once(__DIR__.'/./models/get_participants.php');
        foreach ($participants as $key => $participant) :
        ?>

        <tr>
          <th scope="row"><?= $participant['ptcpt_id']; ?></th>
          <td><?= $participant['ptcpt_name']; ?></td>
          <td><?= $participant['ptcpt_email']; ?></td>
        </tr>

        <?php
        endforeach;
        ?>
      </tbody>
    </table>
  </div>

  <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/js/bootstrap.min.js"></script>

  <script type="text/javascript">
    $(() => {
    })
  </script>
</body>
</html>