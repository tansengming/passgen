(function() {
  var niceSitename, password, saveToLocalstorage, sitename, updateHash;

  this.Helper = {
    url_val: function(url) {
      return URI(url).domain().toLowerCase();
    },
    hash_val: function(password, sitename) {
      return hex_md5(password + ':' + sitename).substr(0, 8);
    }
  };

  sitename = function() {
    return $('#url-field').val();
  };

  niceSitename = function() {
    return Helper.url_val(sitename());
  };

  password = function() {
    return $('#master-password-field').val();
  };

  updateHash = function() {
    $('#hash-field').val(Helper.hash_val(password(), niceSitename()));
    if (niceSitename()) {
      return $('#site-hint').html('Hashed with ' + niceSitename());
    } else {
      return $('#site-hint').html('Please enter a valid URL');
    }
  };

  saveToLocalstorage = function() {
    localStorage.masterpassword = password();
    return localStorage.lastsite = sitename();
  };

  $('document').ready(function() {
    return $('#master-password-field, #url-field').keyup(function(event) {
      updateHash();
      saveToLocalstorage();
      return false;
    });
  });

  $('document').ready(function() {
    if (localStorage.masterpassword) {
      $('#master-password-field').val(localStorage.masterpassword);
    }
    if (localStorage.lastsite) {
      $('#url-field').val(localStorage.lastsite);
    }
    return updateHash();
  });

}).call(this);
