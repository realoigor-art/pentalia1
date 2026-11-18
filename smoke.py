import os
from playwright.sync_api import sync_playwright
errs=[]
with sync_playwright() as p:
    b=p.chromium.launch()
    for vw in [(390,800),(820,1100),(1280,800)]:
        pg=b.new_page(viewport={'width':vw[0],'height':vw[1]})
        pg.on('pageerror',lambda e:errs.append(('PE',vw,str(e)[:150])))
        pg.on('console',lambda m:errs.append(('CE',vw,m.text[:150])) if m.type=='error' and 'TUNNEL' not in m.text and 'fonts' not in m.text.lower() else None)
        pg.add_init_script("sessionStorage.setItem('pent_splash','1')")
        pg.goto('file://'+os.path.abspath(os.path.join(os.path.dirname(__file__),'..','index.html'))+'');pg.wait_for_timeout(300)
        for lang in range(4):
            pg.evaluate(f"setLang('{['pt','en','es','fr'][lang]}')")
            for v in 'HJEBSTP':
                pg.evaluate(f"setV('{v}')");pg.wait_for_timeout(120)
                ov=pg.evaluate("document.documentElement.scrollWidth>innerWidth+1")
                if ov: errs.append(('OVERFLOW',vw,lang,v,pg.evaluate("document.documentElement.scrollWidth")))
        # start every unit
        n=pg.evaluate("UNITS.length")
        for u in range(n):
            try:
                pg.evaluate(f"setV('J');start({u})");pg.wait_for_timeout(60)
                pg.evaluate("document.querySelectorAll('#v button').forEach((b,i)=>{if(i<3)b.click()})")
            except Exception as e: errs.append(('UNIT',u,str(e)[:100]))
        for u in range(12):
            try: pg.evaluate(f"setV('E');eStart({u})");pg.wait_for_timeout(60)
            except Exception as e: errs.append(('EAR',u,str(e)[:100]))
        pg.close()
    b.close()
import collections;print(len(errs));[print(k,v) for k,v in collections.Counter(map(str,errs)).most_common(15)]
