// Q8. Dynamic Blog Posts (jQuery DOM insertion methods)

$(document).ready(function () {
  let postNumber = 5; // 5 posts already exist in the HTML

  // Builds the HTML for a new post
  function createPost(title, isFeatured) {
    const $post = $('<article class="post"><h3 class="post-title"></h3><p class="post-body"></p></article>');
    $post.find(".post-title").text(title);
    $post.find(".post-body").text("This is the content of " + title + ".");
    if (isFeatured) {
      $post.addClass("featured");
    }
    return $post;
  }

  function updateCount() {
    $("#postCount").text("Total posts: " + $(".post").length);
  }

  // 1. Add New Post: .append() puts the new post at the END of the list
  $("#addPost").on("click", function () {
    postNumber++;
    $("#posts").append(createPost("New Post #" + postNumber, false));
    updateCount();
  });

  // 2. Prepend Featured Post: .prepend() puts the new post at the START of the list
  $("#prependFeatured").on("click", function () {
    postNumber++;
    $("#posts").prepend(createPost("Featured Post #" + postNumber, true));
    updateCount();
  });

  // 3. Remove Last Post: .last() selects the last post and .remove() deletes it
  $("#removeLast").on("click", function () {
    $(".post").last().remove();
    updateCount();
  });

  // Click a post to select it (event delegation, so it also works for posts added later)
  $("#posts").on("click", ".post", function () {
    $(this).toggleClass("selected");
  });

  // 4. Add a tag with .before() or .after()
  function getTagTargets() {
    // Tag the selected posts; if no post is selected, tag every post
    const $selected = $(".post.selected");
    return $selected.length > 0 ? $selected : $(".post");
  }

  function getTagElement() {
    const tagName = $("#tagInput").val().trim();
    if (tagName === "") {
      return null;
    }
    return $('<span class="tag"></span>').text("#" + tagName);
  }

  // .before() inserts the tag BEFORE the title element (outside it)
  $("#tagBefore").on("click", function () {
    if (getTagElement() === null) return;
    getTagTargets().each(function () {
      $(this).find(".post-title").first().before(getTagElement());
    });
  });

  // .after() inserts the tag AFTER the title element (outside it)
  $("#tagAfter").on("click", function () {
    if (getTagElement() === null) return;
    getTagTargets().each(function () {
      $(this).find(".post-title").first().after(getTagElement());
    });
  });

  // 5. Highlight posts that contain a keyword
  $("#highlightBtn").on("click", function () {
    const keyword = $("#keywordInput").val().trim().toLowerCase();
    $(".post").removeClass("highlight");
    if (keyword === "") return;

    // .filter() keeps only the posts whose text contains the keyword
    $(".post")
      .filter(function () {
        return $(this).text().toLowerCase().indexOf(keyword) !== -1;
      })
      .addClass("highlight");
  });

  $("#clearHighlight").on("click", function () {
    $(".post").removeClass("highlight");
    $("#keywordInput").val("");
  });

  updateCount();
});