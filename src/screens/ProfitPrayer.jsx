import React from 'react'
import { StyleSheet, Text, ScrollView, ImageBackground, TouchableOpacity } from "react-native";
import DoaaNumber from '../components/DoaaNumbre';


 function ProfitPrayer({navigation}) {
    React.useLayoutEffect(() => {
        navigation.setOptions({headerShown: false});
      }, [navigation]);
  return (
    <ImageBackground blurRadius={10} source={require("../../assets/homeBck.jpg")} style={styles.imgContainer}>
       <ScrollView>
       <Text style={styles.text}><DoaaNumber doaaNumber={1} /></Text>
          <Text style={styles.text}>اللهم لك الحمد كله، اللهم لا قابض لما بسطت ولا باسط لما قبضت، ولا هادي لما أضللت ولا مضل لمن هديت، ولا معطي لما منعت ولا مانع لما أعطيت، ولا مقرب لما باعدت ولا مباعد لما قربت، اللهم ابسط علينا من بركاتك ورحمتك وفضلك ورزقك، اللهم إني أسألك النعيم المقيم الذي لا يحول ولا يزول، اللهم إني أسألك النعيم يوم العيلة والأمن يوم الخوف، اللهم إني عائذ بك من شر ما أعطيتنا وشر ما منعت، اللهم حبب إلينا الإيمان وزينه في قلوبنا وكره إلينا الكفر والفسوق والعصيان واجعلنا من الراشدين، اللهم توفنا مسلمين وأحينا مسلمين وألحقنا بالصالحين غير خزايا ولا مفتونين، اللهم قاتل الكفرة الذين يكذبون رسلك ويصدون عن سبيلك، واجعل عليهم رجزك وعذابك، اللهم قاتل الكفرة الذين أوتوا الكتاب إله الحق.</Text>
          <Text style={styles.text}><DoaaNumber doaaNumber={2} /></Text>
          <Text style={styles.text}> اللهم عافني في بدني، اللهم عافني في سمعي، اللهم عافني في بصري، لا إله إلا أنت، اللهم إني أعوذ بك من الكفر والفقر، اللهم إني أعوذ بك من عذاب القبر، لا إله إلا أنت.</Text>
          <Text style={styles.text}><DoaaNumber doaaNumber={3} /></Text>
          <Text style={styles.text}>رب أعني ولا تعن علي، وانصرني ولا تنصر علي، وامكر لي ولا تمكر علي، واهدني ويسر الهدى لي، وانصرني على من بغى علي، رب اجعلني لك شكارا، لك ذكارا، لك رهابا، لك مطواعا، لك مخبتا إليك أواها منيبا، رب تقبل توبتي واغسل حوبتي وأجب دعوتي وثبت حجتي وسدد لساني واهد قلبي واسلل سخيمة صدري.</Text>
          <Text style={styles.text}><DoaaNumber doaaNumber={4} /></Text>
          <Text style={styles.text}>اللهم بعلمك الغيب وقدرتك على الخلق أحيني ما علمت الحياة خيرا لي، وتوفني إذا علمت الوفاة خيرا لي، اللهم وأسألك خشيتك في الغيب والشهادة، وأسألك كلمة الحق في الرضا والغضب، وأسألك القصد في الفقر والغنى، وأسألك نعيما لا ينفد، وأسألك قرة عين لا تنقطع، وأسألك الرضاء بعد القضاء، وأسألك برد العيش بعد الموت، وأسألك لذة النظر إلى وجهك والشوق إلى لقائك في غير ضراء مضرة ولا فتنة مضلة، اللهم زينا بزينة الإيمان، واجعلنا هداة مهتدين.</Text>
          <Text style={styles.text}><DoaaNumber doaaNumber={5} /></Text>
          <Text style={styles.text}>اللهم إني أسألك العفو والعافية في الدنيا والآخرة، اللهم إني أسألك العفو والعافية في ديني ودنياي وأهلي ومالي، اللهم استر عوراتي وآمن روعاتي، واحفظني من بين يدي ومن خلفي وعن يميني وعن شمالي ومن فوقي، وأعوذ بعظمتك أن أغتال من تحتي.</Text>
          <Text style={styles.text}><DoaaNumber doaaNumber={6} /></Text>
          <Text style={styles.text}>اللهم إني أسألك الثبات في الأمر، والعزيمة على الرشد، وأسألك موجبات رحمتك، وعزائم مغفرتك، وأسألك شكر نعمتك، وحسن عبادتك، وأسألك قلبا سليما، ولسانا صادقا، وأسألك من خير ما تعلم، وأعوذ بك من شر ما تعلم، وأستغفرك لما تعلم، إنك أنت علام الغيوب.</Text>
          <Text style={styles.text}><DoaaNumber doaaNumber={7} /></Text>
          <Text style={styles.text}>اللهم لك أسلمت وبك آمنت، وعليك توكلت وإليك أنبت وبك خاصمت، اللهم إني أعوذ بعزتك لا إله إلا أنت أن تضلني، أنت الحي الذي لا يموت والجن والإنس يموتون.</Text>
          <Text style={styles.text}><DoaaNumber doaaNumber={8} /></Text>
          <Text style={styles.text}>اللهم إني أعوذ بك من زوال نعمتك وتحول عافيتك وفجاءة نقمتك وجميع سخطك.</Text>
          <Text style={styles.text}><DoaaNumber doaaNumber={9} /></Text>
          <Text style={styles.text}>اللهم مصرف القلوب صرف قلوبنا على طاعتك.</Text>
          <Text style={styles.text}><DoaaNumber doaaNumber={10} /></Text>
          <Text style={styles.text}>اللهم اكفني بحلالك عن حرامك وأغنني بفضلك عمن سواك.</Text>
          <Text style={styles.text}><DoaaNumber doaaNumber={11} /></Text>
          <Text style={styles.text}>اللهم رب جبرائيل وميكائيل وإسرافيل، فاطر السموات والأرض، عالم الغيب والشهادة، أنت تحكم بين عبادك فيما كانوا فيه يختلفون، اهدني لما اختلف فيه من الحق بإذنك، إنك تهدي من تشاء إلى صراط مستقيم.</Text>
          <Text style={styles.text}><DoaaNumber doaaNumber={12} /></Text>
          <Text style={styles.text}>اللهم إني أعوذ برضاك من سخطك، وبمعافاتك من عقوبتك، وأعوذ بك منك، لا أحصي ثناء عليك، أنت كما أثنيت على نفسك.</Text>
          <Text style={styles.text}><DoaaNumber doaaNumber={13} /></Text>
          <Text style={styles.text}>اللهم إني أعوذ بك من جهد البلاء ودرك الشقاء وسوء القضاء وشماتة الأعداء.</Text>
          <Text style={styles.text}><DoaaNumber doaaNumber={14} /></Text>
          <Text style={styles.text}>اللهم اجعل لي في قلبي نورا، وفي لساني نورا، وفي سمعي نورا، وفي بصري نورا، ومن فوقي نورا، ومن تحتي نورا، وعن يميني نورا، وعن شمالي نورا، ومن بين يدي نورا، ومن خلفي نورا، واجعل في نفسي نورا، وأعظم لي نورا.</Text>
          <Text style={styles.text}><DoaaNumber doaaNumber={15} /></Text>
          <Text style={styles.text}>اللهم إني أعوذ بك من الكسل والهرم والمأثم والمغرم، ومن فتنة القبر وعذاب القبر، ومن فتنة النار وعذاب النار، ومن شر فتنة الغنى، وأعوذ بك من فتنة الفقر، وأعوذ بك من فتنة المسيح الدجال، اللهم اغسل عني خطاياي بماء الثلج والبرد، ونق قلبي من الخطايا كما نقيت الثوب الأبيض من الدنس، وباعد بيني وبين خطاياي كما باعدت بين المشرق والمغرب.</Text>
          <Text style={styles.text}><DoaaNumber doaaNumber={16} /></Text>
          <Text style={styles.text}>اللهم رب السماوات ورب الأرض ورب العرش العظيم، ربنا ورب كل شيء، فالق الحب والنوى ومنزل التوراة والإنجيل والفرقان، أعوذ بك من شر كل شيء أنت آخذ بناصيته، اللهم أنت الأول فليس قبلك شيء، وأنت الآخر فليس بعدك شيء، وأنت الظاهر فليس فوقك شيء، وأنت الباطن فليس دونك شيء، اقض عنا الدين وأغننا من الفقر.</Text>
          <Text style={styles.text}><DoaaNumber doaaNumber={17} /></Text>
          <Text style={styles.text}>اللهم أصلح لي ديني الذي هو عصمة أمري، وأصلح لي دنياي التي فيها معاشي، وأصلح لي آخرتي التي فيها معادي واجعل الحياة زيادة لي في كل خير، واجعل الموت راحة لي من كل شر.</Text>
          <Text style={styles.text}><DoaaNumber doaaNumber={18} /></Text>
          <Text style={styles.text}>اللهم إني أعوذ بك من العجز والكسل، والجبن والبخل، والهرم وعذاب القبر، اللهم آت نفسي تقواها وزكها أنت خير من زكاها، أنت وليها ومولاها، اللهم إني أعوذ بك من علم لا ينفع، ومن قلب لا يخشع، ومن نفس لا تشبع، ومن دعوة لا يستجاب لها.</Text>
          <Text style={styles.text}><DoaaNumber doaaNumber={19} /></Text>
          <Text style={styles.text}>اللهم أنت ربي لا إله إلا أنت، خلقتني وأنا عبدك، وأنا على عهدك ووعدك ما استطعت، أعوذ بك من شر ما صنعت، أبوء لك بنعمتك علي، وأبوء بذنبي فاغفر لي فإنه لا يغفر الذنوب إلا أنت.</Text>
          <Text style={styles.text}><DoaaNumber doaaNumber={20} /></Text>
          <Text style={styles.text}>رب اغفر لي خطيئتي وجهلي وإسرافي في أمري كله وما أنت أعلم به مني، اللهم اغفر لي خطاياي وعمدي وجهلي وهزلي، وكل ذلك عندي، اللهم اغفر لي ما قدمت وما أخرت وما أسررت وما أعلنت أنت المقدم وأنت المؤخر وأنت على كل شيء قدير.</Text>
       </ScrollView>
    </ImageBackground>
  )
}
export default ProfitPrayer;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  imgContainer:{
    flex: 1,
    backgroundColor: '#3A0CA3',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Image: {
    width:274,
    height:274
  },
  text:{
    textAlign:"center",
    marginTop:5,
    marginBottom:5,
    fontSize:17,
    fontWeight:"bold",
    padding:5,
    color:"white"
  },
  textColor:{
    color:"#ffa90f"
  },
  secText:{
    color:"#1CA3B6",
  }
})