<?php include('header.php'); ?>
<div id="content">
  <header>
    <h3>Theory of Operation</h3>
  </header>
  <p><strong>The operation of the system can be broken down into three areas.</strong>  The first area involves getting the film scanned by the flatbed scanner.  The second area involves taking the film scans and pulling the frames from them and into individual images files.  The last area is taking the image frames and compiling them into a video file.  The first area is by far the hardest of the three, because it requires automating operations in the physical world.</p>
  <p><strong>For the system to work,</strong> every inch of film has to be scanned in a systematic way so that no frame is excluded or duplicated.  To accomplish this, I designed a gearbox that tracked the amount of film that it moved.  The gearbox, being on one side of the scanner, slowly moves the film from a spool on the other side of the scanner.  The film is guided by rollers and is wound up by a motor controlled film spool.  Before the film is spooled up, the film passes over a film sprocket that meshes with the sprocket holes on the film.  The movement turns the sprocket in proportion to the amount of film passing over the scanner's glass.  Once a predetermined amount of sprocket rotation has occurred, the gearbox stops the uptake spool.  The film is then scanned and saved on the computer.  The process is repeated until all film has been scanned.  This whole operation only requires the operators to setup the system and to start it.</p>
  <p><strong>The second area,</strong> involves getting the frames from the film scans.  This sounds complex, but really isn't, as long as the film was scanned in accurate intervals.  This means that the first frame in an image scan must be in a highly predictable position.  The operation starts by leveling the film, but most of the time the film is very straight as it comes through the scanner.  Next the first sprocket hole has to be found.  Just as in a normal projector, the sprocket holes are used as registers to determine the location of frames.  Once the hole is found, the hole's center is calculated.  The location of the frame is then determined by the hole's center.  The process is repeated for as many frames as are expected in the film scan.  So the operation consists of: finding the sprocket hole; determining its center; and pulling the frame by reference of the center of the sprocket hole.  Each frame is saved as an image file and is given a sequentially numbered filename that relates to its order on the film spool.</p>
  <p><strong>The last area is the easiest,</strong> because no software needs to be written or elaborate contraption needs to fabricated.  The numbered image frames are processed into a video file that best suits its intended destination.  In this case, a 30 fps MPEG-2 video to be burned as a DVD.  The native frame rate of the film is 18 fps, but I found that dropping that to 15 fps and doubling each frame made for an easy and visually appealing match with the required 30 fps needed for NTSC output.  Since there is no audio track on the film, no audio needs to be synced with the video, but music can be added easily if desired.</p>
  <footer>
    <div class="prev"><a href="index.php"><div></div>Introduction</a></div>
    <div class="next"><a href="application.php">Application<div></div></a></div>
  </footer>
</div>
<?php include('footer.php'); ?>
