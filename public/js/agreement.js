$(document).ready(function(){
      //  Wizard 1    
        $('#wizard1').smartWizard({
            transitionEffect:'fade',
            onFinish:onFinishCallback,
            onLeaveStep  : leaveAStepCallback,
        });
        function leaveAStepCallback(obj, context){
            // To check and enable finish button if needed
            if (context.fromStep >= 2) {
                $('#wizard1').smartWizard('enableFinish', true);
            }
            return true;
        }
      //  Wizard 2
      $('#wizard2').smartWizard({transitionEffect:'slide',onFinish:onFinishCallback});
      function onFinishCallback(){
        alert('Finish Called');
      }     
    });