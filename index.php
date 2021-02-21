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
    <form class="form-inline mb-3 pb-3 border-bottom" id="crud_form_for_create">
      <input type="text" class="form-control mb-2 mr-sm-2" id="name" name="name" placeholder="Jane Doe" autocomplete="off">
      <input type="email" class="form-control mb-2 mr-sm-2" id="email" name="email" placeholder="jane@mail.com" autocomplete="off">
      <button type="submit" class="btn btn-primary mb-2">Submit</button>
    </form>
    
    <h2>R - Read and D - Delete</h2>
    <div class="mb-3 pb-3 border-bottom">
      <table class="table table-bordered">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col" colspan="2">Actions</th>
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
            <td><button class="btn btn-primary btn-sm btn-edit" data-id="<?= $participant['ptcpt_id']; ?>" data-name="<?= $participant['ptcpt_name']; ?>" data-email="<?= $participant['ptcpt_email']; ?>">Edit</button></td>
            <td><button class="btn btn-danger btn-sm btn-del" data-id="<?= $participant['ptcpt_id']; ?>">Delete</td>
          </tr>

          <?php
          endforeach;
          ?>
        </tbody>
      </table>
    </div>

    <h2>U - Update</h2>
    <form class="form-inline mb-3 pb-3 border-bottom" id="crud_form_for_update">
      <input type="hidden" class="form-control mb-2 mr-sm-2" id="id" name="id" autocomplete="off">
      <input type="text" class="form-control mb-2 mr-sm-2" id="name" name="name" placeholder="Jane Doe" autocomplete="off">
      <input type="email" class="form-control mb-2 mr-sm-2" id="email" name="email" placeholder="jane@mail.com" autocomplete="off">
      <button type="submit" class="btn btn-primary mb-2">Update</button>
    </form>

    <h2>Single File Uploading</h2>
    <form class="form-inline mb-3 pb-3 border-bottom" id="file_upload_form" enctype="multipart/form-data">
      <input type="text" class="form-control mb-2 mr-sm-2" id="name" name="name" placeholder="Jane Doe" autocomplete="off">
      <input type="file" id="your_file" name="your_file" />
      <button type="submit" class="btn btn-primary mb-2">Submit</button>
    </form>
  </div>

  <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/js/bootstrap.min.js"></script>
  <!-- custom js -->
  <script src="assets/js/index.js"></script>
</body>
</html>
