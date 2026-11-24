// Q6. Event Subscription Panel (jQuery: .on() and .off())

$(document).ready(function () {
  const initialTopics = ["Tech News", "Sports Updates", "Music Releases", "Movie Reviews", "Travel Deals"];

  // 5. Shows a message by inserting a new element into the DOM
  function showMessage(text, type) {
    const $message = $("<p></p>").addClass("message " + type).text(text);
    $("#messages").append($message); // dynamically inserted into the page

    // Remove the message after 3 seconds
    setTimeout(function () {
      $message.remove();
    }, 3000);
  }

  // Creates one topic row and attaches its click events using .on()
  function addTopic(topicName) {
    const $topic = $(
      '<li class="topic">' +
        '<span class="topic-name"></span>' +
        '<span class="status off">Notifications OFF</span>' +
        '<div class="actions">' +
          '<button class="subscribe">Subscribe</button>' +
          '<button class="unsubscribe" disabled>Unsubscribe</button>' +
          '<button class="remove">Remove</button>' +
        "</div>" +
      "</li>"
    );
    $topic.find(".topic-name").text(topicName);
    $("#topicList").append($topic);

    // 1. Subscribe: enable notifications
    $topic.find(".subscribe").on("click", function () {
      $topic.find(".status").removeClass("off").addClass("on").text("Notifications ON");
      $topic.find(".subscribe").prop("disabled", true);
      $topic.find(".unsubscribe").prop("disabled", false);
      showMessage("Subscribed to " + topicName + ". Notifications are enabled.", "success");
    });

    // 2. Unsubscribe: disable notifications
    $topic.find(".unsubscribe").on("click", function () {
      $topic.find(".status").removeClass("on").addClass("off").text("Notifications OFF");
      $topic.find(".subscribe").prop("disabled", false);
      $topic.find(".unsubscribe").prop("disabled", true);
      showMessage("Unsubscribed from " + topicName + ". Notifications are disabled.", "success");
    });

    // 4. Remove: detach the click events with .off(), then remove the row
    $topic.find(".remove").on("click", function () {
      $topic.find("button").off("click"); // .off("click") removes the handlers added with .on("click")
      $topic.find("button").prop("disabled", true);
      $topic.fadeOut(300, function () {
        $(this).remove();
      });
      showMessage(topicName + " was removed and its events were detached.", "success");
    });
  }

  // Build the starting topics (each one gets its own .on() events)
  initialTopics.forEach(addTopic);

  // 3. Dynamically add a new topic: its buttons get .on() events inside addTopic()
  $("#addTopicForm").on("submit", function (event) {
    event.preventDefault();
    const name = $("#newTopic").val().trim();

    if (name === "") {
      showMessage("Please enter a topic name.", "error");
      return;
    }

    // Do not allow the same topic twice
    const alreadyExists = $(".topic-name").filter(function () {
      return $(this).text().toLowerCase() === name.toLowerCase();
    }).length > 0;

    if (alreadyExists) {
      showMessage(name + " is already in the list.", "error");
      return;
    }

    addTopic(name);
    $("#newTopic").val("");
    showMessage(name + " was added to your topics.", "success");
  });
});