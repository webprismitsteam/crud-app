<!DOCTYPE html>
<html>
<head>
  <title>CRUD App</title>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css">
</head>
<body>
  <div class="container">
    <h1 class="mb-3 pb-3 border-bottom">CRUD App</h1>

    <h2>C - Create</h2>
    <form class="form-inline mb-3 pb-3 border-bottom" id="crud_form">
      <input type="text" class="form-control mb-2 mr-sm-2" id="name" name="name" placeholder="Jane Doe">
      <input type="email" class="form-control mb-2 mr-sm-2" id="email" name="email" placeholder="jane@mail.com">
      <button type="submit" class="btn btn-primary mb-2">Submit</button>
    </form>
    
    <h2>R - Read</h2>
    <div class="mb-3 pb-3 border-bottom">
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
          require_once(__DIR__.'/./models/participants/get_participants.php');
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
  </div>

  <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/js/bootstrap.min.js"></script>
  <script src="assets/js/index.js"></script>
</body>
</html>
